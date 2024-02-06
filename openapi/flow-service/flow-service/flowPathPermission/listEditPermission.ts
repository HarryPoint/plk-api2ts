// JSONResult«List«新增权限编辑»»_2
export interface IJSONResultListAddsPermissionEdit2 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IAddedPermissionEdit2[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 新增权限编辑_2
export interface IAddedPermissionEdit2 {
    // ID
    id: number;
    // 流程状态
    flowStatus: string;
    // 是否可编辑
    isEditable: string;
    // 是否禁用
    isDisabled: string;
}
