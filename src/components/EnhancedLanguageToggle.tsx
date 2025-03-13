import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { alpha, Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

interface EnhancedLanguageToggleProps {
  value: boolean;
  onChange: (newValue: boolean) => void;
}

const EnhancedLanguageToggle: React.FC<EnhancedLanguageToggleProps> = ({ value, onChange }) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    onChange(!value);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        userSelect: 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleToggle}
    >
      {/* Labels */}
      <Typography
        variant="body2"
        sx={{
          position: 'absolute',
          left: '-36px',
          color: value ? theme.palette.text.secondary : theme.palette.primary.main,
          transition: 'color 0.3s ease',
          fontWeight: value ? 400 : 700,
        }}
      >
        TH
      </Typography>
      <Typography
        variant="body2"
        sx={{
          position: 'absolute',
          right: '-36px',
          color: value ? theme.palette.primary.main : theme.palette.text.secondary,
          transition: 'color 0.3s ease',
          fontWeight: value ? 700 : 400,
        }}
      >
        EN
      </Typography>

      {/* Toggle Container */}
      <Box
        sx={{
          width: 50,
          height: 28,
          borderRadius: 14,
          backgroundColor: value
            ? theme.palette.primary.main
            : theme.palette.grey[300],
          position: 'relative',
          boxShadow: isHovered
            ? `0 0 10px ${alpha(theme.palette.primary.main, 0.5)}`
            : 'none',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        {/* Toggle Thumb */}
        <motion.div
          style={{
            width: 22,
            height: 22,
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            position: 'absolute',
            top: 3,
            left: value ? 25 : 3,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
          layout
          transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        />
      </Box>
    </Box>
  );
};

export default EnhancedLanguageToggle;
