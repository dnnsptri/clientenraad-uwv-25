import { ReactNode } from "react";

import FadeInSection from "@/components/FadeInSection";

const ArticleBodySection = ({ children }: { children: ReactNode }) => (
  <FadeInSection>
    <div className="overflow-visible">
      <div className="container">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="w-full">
              <div>
                <div className="prose prose-longform prose-h2:scroll-m-10">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </FadeInSection>
);

export { ArticleBodySection };
