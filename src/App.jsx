import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
// Add page imports here
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

const AuthenticatedApp = () => {
    const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

    // Show loading spinner while checking app public settings or auth
    if (isLoadingPublicSettings || isLoadingAuth) {
        return (
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
            </div>
        );
    }

    // Handle authentication errors
    if (authError) {
        if (authError.type === 'user_not_registered') {
            return <UserNotRegisteredError />;
        } else if (authError.type === 'auth_required') {
            // Redirect to login automatically
            navigateToLogin();
            return null;
        }
    }

    // Render the main app
    return (
        <Routes>
            {/* Add your page Route elements here */}
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
    );
};


function App() {

    return (
        <AuthProvider>
            <QueryClientProvider client={queryClientInstance}>
                <Router>
                    <ScrollToTop />
                    <AuthenticatedApp />
                </Router>
                <Toaster />
            </QueryClientProvider>
        </AuthProvider>
    )
}

export default App