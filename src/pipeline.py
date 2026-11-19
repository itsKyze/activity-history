import asyncio
from typing import Dict, Any

class AsyncEventDispatcher:
    def __init__(self):
        self._handlers = {}
    async def dispatch(self, event: str, data: Dict[str, Any]):
        if event in self._handlers:
            await self._handlers[event](data)
