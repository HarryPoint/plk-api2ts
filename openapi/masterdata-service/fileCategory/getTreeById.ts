// JSONResult«文件分类明细响应DTO»_1
export interface IJSONResult文件分类明细响应DTO_1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I文件分类明细响应DTO_1;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 文件分类明细响应DTO_1
export interface I文件分类明细响应DTO_1 {
    // ID
    id: number;
    // 分类名称
    name: string;
    // 上级ID
    parentId: number;
    // 创建人ID
    createUserId: number;
    // 下级树列表
    childList: I文件分类明细响应DTO_6[];
    // 用户权限列表
    userPermissionList: string[];
}
// 文件分类明细响应DTO_6
export interface I文件分类明细响应DTO_6 {
    // ID
    id: number;
    // 分类名称
    name: string;
    // 上级ID
    parentId: number;
    // 创建人ID
    createUserId: number;
    // 下级树列表
    childList: I文件分类明细响应DTO_6[];
    // 用户权限列表
    userPermissionList: string[];
}
