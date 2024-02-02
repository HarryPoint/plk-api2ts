// JSONResult«List«ProduceTechnologyRoutingResponseDTO»»
export interface IJSONResultListProduceTechnologyRoutingResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProduceTechnologyRoutingResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ProduceTechnologyRoutingResponseDTO
export interface IProduceTechnologyRoutingResponseDTO {
    // 创建用户ID
    createUserId: number;
    // 创建用户名
    createUserName: string;
    // 生产工艺id
    produceTechnologyId: number;
    // 创建部门ID
    createDeptId: number;
    // 创建部门名称
    createDeptName: string;
    // 更新部门ID
    updateDeptId: number;
    // 更新部门名称
    updateDeptName: string;
    // 创建时间
    createTime: string;
    // 更新用户ID
    updateUserId: number;
    // 更新用户名称
    updateUserName: string;
    // 更新时间
    updateTime: string;
    // id
    id: number;
    // 所属工艺路径id
    routingId: number;
    // 工艺路径编码
    code: string;
    // 工艺路径名称
    name: string;
    // 关联物料id
    materialId: number;
    // 关联BOM id
    materialBomId: number;
    // 所属生产工艺物料BOMid
    produceTechnologyMaterialBomId: number;
}
