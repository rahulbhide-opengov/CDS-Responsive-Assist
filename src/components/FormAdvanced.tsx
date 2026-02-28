/**
 * CDS Advanced Form Components (CDS-First Architecture)
 * Complex form components with CDS API - MUI is an implementation detail
 *
 * Developer uses CDS design language:
 * - Semantic prop names (leftItems, rightItems, onChange)
 * - Intuitive naming aligned with CDS design system
 */

import React, { useState, useCallback } from 'react';
import {
  List as MuiList,
  ListItem as MuiListItem,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
  Checkbox,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// ============================================================================
// CDS-FIRST TYPE DEFINITIONS
// ============================================================================

/**
 * Transfer List Item (internal type)
 */
export interface TransferListItem {
  id: string | number;
  label: string;
  disabled?: boolean;
}

/**
 * CDS TransferList Props (CDS API)
 */
export interface TransferListProps {
  /**
   * Left list title
   * @default 'Available'
   */
  leftTitle?: string;

  /**
   * Right list title
   * @default 'Selected'
   */
  rightTitle?: string;

  /**
   * Initial items in left list
   */
  leftItems: TransferListItem[];

  /**
   * Initial items in right list
   */
  rightItems: TransferListItem[];

  /**
   * Callback when items are transferred
   */
  onChange?: (left: TransferListItem[], right: TransferListItem[]) => void;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;
}

// ============================================================================
// STYLED COMPONENTS (CDS Styling Priority)
// ============================================================================

const TransferListContainer = styled(Grid)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
}));

const TransferListPaper = styled(Paper)(({ theme }) => ({
  width: 280,
  height: 320,
  overflow: 'auto',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
}));

const TransferListControls = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(2, 1),
}));

// ============================================================================
// CDS TRANSFER LIST COMPONENT
// ============================================================================

/**
 * CDS TransferList Component
 *
 * Dual list selector for moving items between two lists
 * Commonly used for permission assignment, feature selection, bulk transfers
 *
 * @example
 * // Basic transfer list
 * <TransferList
 *   leftTitle="Available"
 *   rightTitle="Selected"
 *   leftItems={[
 *     { id: 1, label: 'Item 1' },
 *     { id: 2, label: 'Item 2' }
 *   ]}
 *   rightItems={[
 *     { id: 3, label: 'Item 3' }
 *   ]}
 *   onChange={(left, right) => console.log('Updated:', left, right)}
 * />
 *
 * @example
 * // With disabled items
 * <TransferList
 *   leftItems={[
 *     { id: 1, label: 'Item 1' },
 *     { id: 2, label: 'Item 2', disabled: true }
 *   ]}
 *   rightItems={[]}
 *   onChange={handleChange}
 * />
 */
export const TransferList: React.FC<TransferListProps> = ({
  leftTitle = 'Available',
  rightTitle = 'Selected',
  leftItems: initialLeft,
  rightItems: initialRight,
  onChange,
  className,
  sx,
}) => {
  const [left, setLeft] = useState<TransferListItem[]>(initialLeft);
  const [right, setRight] = useState<TransferListItem[]>(initialRight);
  const [checked, setChecked] = useState<(string | number)[]>([]);

  const leftChecked = checked.filter((id) =>
    left.some((item) => item.id === id)
  );
  const rightChecked = checked.filter((id) =>
    right.some((item) => item.id === id)
  );

  const handleToggle = useCallback((id: string | number) => {
    setChecked((prev) => {
      const currentIndex = prev.indexOf(id);
      const newChecked = [...prev];

      if (currentIndex === -1) {
        newChecked.push(id);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      return newChecked;
    });
  }, []);

  const handleMoveRight = useCallback(() => {
    const itemsToMove = left.filter((item) => leftChecked.includes(item.id));
    const newLeft = left.filter((item) => !leftChecked.includes(item.id));
    const newRight = [...right, ...itemsToMove];

    setLeft(newLeft);
    setRight(newRight);
    setChecked([]);
    onChange?.(newLeft, newRight);
  }, [left, right, leftChecked, onChange]);

  const handleMoveLeft = useCallback(() => {
    const itemsToMove = right.filter((item) => rightChecked.includes(item.id));
    const newRight = right.filter((item) => !rightChecked.includes(item.id));
    const newLeft = [...left, ...itemsToMove];

    setLeft(newLeft);
    setRight(newRight);
    setChecked([]);
    onChange?.(newLeft, newRight);
  }, [left, right, rightChecked, onChange]);

  const handleMoveAllRight = useCallback(() => {
    const newRight = [...right, ...left];
    setLeft([]);
    setRight(newRight);
    setChecked([]);
    onChange?.([], newRight);
  }, [left, right, onChange]);

  const handleMoveAllLeft = useCallback(() => {
    const newLeft = [...left, ...right];
    setLeft(newLeft);
    setRight([]);
    setChecked([]);
    onChange?.(newLeft, []);
  }, [left, right, onChange]);

  const renderList = (title: string, items: TransferListItem[]) => (
    <TransferListPaper>
      <MuiList dense component="div" role="list">
        {items.map((item) => (
          <MuiListItem
            key={item.id}
            role="listitem"
            button
            onClick={() => !item.disabled && handleToggle(item.id)}
            disabled={item.disabled}
          >
            <MuiListItemIcon>
              <Checkbox
                checked={checked.includes(item.id)}
                tabIndex={-1}
                disableRipple
                disabled={item.disabled}
                inputProps={{ 'aria-labelledby': `transfer-list-item-${item.id}` }}
              />
            </MuiListItemIcon>
            <MuiListItemText
              id={`transfer-list-item-${item.id}`}
              primary={item.label}
            />
          </MuiListItem>
        ))}
      </MuiList>
    </TransferListPaper>
  );

  return (
    <TransferListContainer container spacing={2} sx={sx} className={className}>
      <Grid item xs={12} sm={5}>
        {renderList(leftTitle, left)}
      </Grid>
      <Grid item xs={12} sm={2}>
        <TransferListControls>
          <Button
            variant="outlined"
            size="small"
            onClick={handleMoveAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
            sx={{ minWidth: 32 }}
          >
            ≫
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={handleMoveRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
            sx={{ minWidth: 32 }}
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={handleMoveLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
            sx={{ minWidth: 32 }}
          >
            &lt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={handleMoveAllLeft}
            disabled={right.length === 0}
            aria-label="move all left"
            sx={{ minWidth: 32 }}
          >
            ≪
          </Button>
        </TransferListControls>
      </Grid>
      <Grid item xs={12} sm={5}>
        {renderList(rightTitle, right)}
      </Grid>
    </TransferListContainer>
  );
};

export type { TransferListItem };
