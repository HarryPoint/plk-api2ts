// 企业路由移动请求 DTO
export interface IEnterpriseRoutingMobileRequestDTO {
    // 路由id
    id: number;
    // 移动到父级id
    parentId: number;
    // 客户端组编码
    clientGroupCode: string;
    // 移动到父级id下的所有子集id顺序列表
    childIds: number[];
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
