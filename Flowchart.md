Problem Statement

Modern e-commerce platforms such as Amazon require continuous deployment of new features and updates. However, traditional CI/CD pipelines deploy changes without intelligent evaluation, leading to system failures, downtime, and poor user experience—especially during high-traffic events like sales.

Manual monitoring and rollback processes are slow and inefficient, causing increased recovery time and potential revenue loss. Additionally, existing systems lack the ability to predict failures or adapt to real-world traffic conditions.

![alt text](image.png) ![alt text](image-1.png) ![alt text](image-2.png)

Therefore, there is a need for an intelligent, automated deployment system that can:

Predict failures before full deployment
Test updates on a limited user base
Automatically rollback faulty deployments
Simulate real-world traffic conditions (we used OMNeT++ for simulation)
Ensure system reliability and minimal downtime


Developer → Code Push
        ↓
     Jenkins
        ↓
   Build + Test
        ↓
 Docker Deploy
        ↓
 Canary Release (10%)
        ↓
 Monitoring System
        ↓
   ML Model Decision
     ↓         ↓
  Safe       Fail
   ↓           ↓
Full Deploy   Rollback
        ↓
 Dashboard



User Requests → Backend Logs → Monitoring Script
                                      ↓
                         Extract metrics (error_rate, response_time in ms (Threshold: 250ms then timeout)) (500 Internal Server Error, 404 Not Found, 401 Unauthorized, etc)
                                      ↓
                              Send to Model

{
  "timestamp": "10:00",
  "status": "fail",
  "response_time": 1200
}