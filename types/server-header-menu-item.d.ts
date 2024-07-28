import type { ServerWithMembersWithProfile } from "@/types/server-members-profile"

// 定义基本接口类型
interface BaseServerHeaderMenuItemProps {
  identity: boolean
  context: string
  Icon: React.ElementType
  iconType?: boolean
  server?: ServerWithMembersWithProfile
}

interface ExtendedServerHeaderMenuItemProps
  extends BaseServerHeaderMenuItemProps {
  invite?: boolean
  edit?: boolean
  manage?: boolean
}

export type ServerHeaderMenuItemProps = ExtendedServerHeaderMenuItemProps &
  (
    | { invite: true; server: ServerWithMembersWithProfile }
    | { edit: true; server: ServerWithMembersWithProfile }
    | { manage: true; server: ServerWithMembersWithProfile }
    | { invite?: false; edit?: false; manage?: false; server?: never }
  )
