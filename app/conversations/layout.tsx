import { ReactNode } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";
import ConversationList from "./components/ConversationList";

interface layoutProps {
  children: ReactNode;
}

const layout = async ({ children }: layoutProps) => {
  const conversations = await getConversations();
  const users = await getUsers();
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList
          users={users}
          initialItems={conversations}
        />
        {children}
      </div>
    </Sidebar>
  );
};

export default layout;
