import React, { createContext, useContext } from 'react';
import type { Tables } from '@/integrations/supabase/types';

export type Invitation = Tables<'invitations'>;

interface InvitationContextType {
  invitation: Invitation;
}

const InvitationContext = createContext<InvitationContextType | null>(null);

export const useInvitation = (): Invitation => {
  const context = useContext(InvitationContext);
  if (!context) {
    throw new Error('useInvitation must be used within an InvitationProvider');
  }
  return context.invitation;
};

export const InvitationProvider: React.FC<{ invitation: Invitation; children: React.ReactNode }> = ({ invitation, children }) => {
  return (
    <InvitationContext.Provider value={{ invitation }}>
      {children}
    </InvitationContext.Provider>
  );
};
