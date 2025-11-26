// sections
'use client';

import { PremiumGuard } from "src/auth/guard";
import BurnTokenForm from "src/sections/token/burn-token";


// ----------------------------------------------------------------------

// export const metadata = {
//   title: 'markits | Burn Token',
//   description:'Burn your token with markits\'s Burn Token tool.'
// };

export default function Page() {
  return(
    <PremiumGuard
      customMessage="Advanced features require markits Platform Pass"
      // allowBypass={process.env.NODE_ENV === 'development'}
    > 
      <BurnTokenForm tokenName="" />
    </PremiumGuard>
  );
}


