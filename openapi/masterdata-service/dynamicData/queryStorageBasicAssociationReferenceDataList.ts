// FormReferencingQueryRequestDTO
export interface IFormReferencingQueryRequestDTO {
    // undefined
    flowPathId: number;
    // undefined
    formRecordIdList: number[];
}
// JSONResult«List«库存基础数据关联数据查询响应»»
export interface IJSONResultList库存基础数据关联数据查询响应 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I库存基础数据关联数据查询响应[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 库存基础数据关联数据查询响应
export interface I库存基础数据关联数据查询响应 {
    // 数据id
    id: number;
    // 数据编码
    code: string;
    // 数据名称
    name: string;
}
