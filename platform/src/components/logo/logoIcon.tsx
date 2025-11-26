import { forwardRef } from 'react';
// @mui
import { useTheme, alpha } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box, { BoxProps } from '@mui/material/Box';
// routes
import { RouterLink } from 'src/routes/components';
// icons
import { TrendingUp, ArrowRight } from 'lucide-react';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const LogoIcon = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const theme = useTheme();

    const logoContent = (
      <Box
        ref={ref}
        sx={{
          position: 'relative',
          width: 40,
          height: 40,
          backgroundColor: alpha(theme.palette.primary.main, 0.2),
          border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
          borderRadius: 1.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.3),
            '& .trending-icon': {
              transform: 'scale(1.1)',
            },
            '& .arrow-icon': {
              transform: 'translateX(2px)',
            },
          },
          ...sx,
        }}
        {...other}
      >
        <TrendingUp
          className="trending-icon"
          size={24}
          style={{
            color: theme.palette.primary.main,
            transition: 'transform 0.3s ease',
          }}
        />
        <ArrowRight
          className="arrow-icon"
          size={16}
          style={{
            position: 'absolute',
            right: -4,
            top: -4,
            color: alpha(theme.palette.primary.main, 0.6),
            transition: 'transform 0.3s ease',
          }}
        />
      </Box>
    );

    if (disabledLink) {
      return logoContent;
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logoContent}
      </Link>
    );
  }
);

LogoIcon.displayName = 'LogoIcon';

export default LogoIcon;
