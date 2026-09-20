import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
// Page imports
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Credentialing from "@/pages/Credentialing";
import ProviderContracting from "@/pages/ProviderContracting";
import ProviderEnrollment from "@/pages/ProviderEnrollment";
import Billing from "@/pages/Billing";
import ARManagement from "@/pages/ARManagement";
import PriorAuthorization from "@/pages/PriorAuthorization";
import PatientSupport from "@/pages/PatientSupport";
import About from "@/pages/About";
import Resources from "@/pages/Resources";
import Contact from "@/pages/Contact";
import ThankYou from "@/pages/ThankYou";

function App() {
    return (
        <QueryClientProvider client={queryClientInstance}>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/credentialing" element={<Credentialing />} />
                        <Route path="/provider-contracting" element={<ProviderContracting />} />
                        <Route path="/provider-enrollment" element={<ProviderEnrollment />} />
                        <Route path="/billing" element={<Billing />} />
                        <Route path="/ar-management" element={<ARManagement />} />
                        <Route path="/prior-authorization" element={<PriorAuthorization />} />
                        <Route path="/patient-support" element={<PatientSupport />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/thank-you" element={<ThankYou />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
            <Toaster />
        </QueryClientProvider>
    );
}

export default App