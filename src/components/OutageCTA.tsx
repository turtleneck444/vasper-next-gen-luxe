import React from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export const OutageCTA = () => {
  return (
    <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 border-0 shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white/20 rounded-full">
            <AlertTriangle className="w-8 h-8 text-white animate-pulse" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-1">System Outage or Emergency?</h3>
            <p className="text-red-100">Get immediate expert assistance 24/7</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button 
            size="lg" 
            className="bg-white text-red-600 hover:bg-red-50 font-semibold px-6 py-3 shadow-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Emergency Line
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 px-6 py-3"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Live Chat
          </Button>
        </div>
      </div>
    </Card>
  );
};