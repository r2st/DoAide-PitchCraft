from __future__ import annotations

import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import app.models  # noqa: F401
from app.core.config import settings
from app.routers import auth, checker, elevator_pitch, generator, health, investor_qa, model, valuation

logger = logging.getLogger(__name__)


def create_app() -> FastAPI:
    application = FastAPI(
        title=settings.app_name,
        version=settings.app_version,
        description="AI pitch deck and financial model generator for startups.",
        debug=settings.debug,
    )

    application.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    prefix = settings.api_v1_prefix
    application.include_router(health.router, prefix=prefix)
    application.include_router(auth.router, prefix=prefix)
    application.include_router(valuation.router, prefix=prefix)
    application.include_router(generator.router, prefix=prefix)
    application.include_router(model.router, prefix=prefix)
    application.include_router(checker.router, prefix=prefix)
    application.include_router(elevator_pitch.router, prefix=prefix)
    application.include_router(investor_qa.router, prefix=prefix)

    @application.get("/", include_in_schema=False)
    def root() -> dict:
        return {
            "app": settings.app_name,
            "version": settings.app_version,
            "health": f"{prefix}/health",
        }

    return application


app = create_app()
