
import posthog from 'posthog-js' 
posthog.init(phc_KVwMPH1zpeKPIIYKsCKqoA5LwEyeaUYxwHXzT92aGeX, { api_host: 'https://app.posthog.com' })
posthog.capture('$pageview')