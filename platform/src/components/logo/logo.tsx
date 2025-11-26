import { forwardRef } from 'react';
// @mui
import { useTheme, alpha } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// routes
import { RouterLink } from 'src/routes/components';
// icons
import { TrendingUp, ArrowRight } from 'lucide-react';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const theme = useTheme();

    const logoContent = (
      <Stack
        direction="row"
        alignItems="center"
        spacing={1.5}
        ref={ref as any}
        sx={{
          cursor: 'pointer',
          transition: 'transform 0.2s ease',
          flexShrink: 0,
          '&:hover': {
            transform: 'scale(1.05)',
          },
          ...sx,
        }}
        {...other}
      >
        {/* Logo Icon - Matching landing page */}
        <Box
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
          }}
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

        {/* Logo Text */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: theme.palette.text.primary,
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          markits
        </Typography>
      </Stack>
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

Logo.displayName = 'Logo';

export default Logo;
