// JSONResult«List«工艺路径选择VO»»
export interface IJSONResultList工艺路径选择VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I工艺路径选择VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工艺路径选择VO
export interface I工艺路径选择VO {
    // id
    id: number;
    // 工艺路径名称
    name: string;
    // 工艺路径编号
    code: string;
    // 是否物料默认
    isDefault: string;
    // 物料bomId
    materialBomId: number;
    // 物料bom名称
    materialBomName: string;
    // 物料bom编号
    materialBomCode: string;
    // 物料ID
    materialId: number;
}
