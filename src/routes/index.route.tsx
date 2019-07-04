import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PublicTypeRoute from "./publics/public.type.route";

import LayoutComponent from "../component/layout/layout.component";
import LoadingComponent from "../component/progress/loader/loader.component";

const Root: React.FC = () => {
  return (
    <LayoutComponent>
      <Router>
        <Suspense fallback={<LoadingComponent />}>
          <PublicTypeRoute />
        </Suspense>
      </Router>
    </LayoutComponent>
  );
};

export default Root;
