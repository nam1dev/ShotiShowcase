import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Proxy route for Shoti API to avoid CORS issues
  app.get("/api/shoti", async (req, res) => {
    try {
      const response = await fetch('https://betadash-shoti-yazky.vercel.app/shotizxx?apikey=shipazu');
      
      if (!response.ok) {
        return res.status(response.status).json({ error: 'Failed to fetch video from Shoti API' });
      }
      
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Error fetching from Shoti API:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
