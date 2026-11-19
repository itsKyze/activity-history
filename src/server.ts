export interface UserSession { id: string; role: string; exp: number; }
export class WebSocketGateway {
    private connections = new Map<string, WebSocket>();
    public broadcast(payload: unknown): void {
        this.connections.forEach(ws => ws.send(JSON.stringify(payload)));
    }
}
