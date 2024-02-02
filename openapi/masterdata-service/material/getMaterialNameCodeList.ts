// 物料名称编号查询VO
export interface I物料名称编号查询VO {
    // 物料名称/编号
    nameOrCode: string;
    // 物料类型数组
    materialTypeList: string[];
}
// JSONResult«List«物料返回信息»»
export interface IJSONResultList物料返回信息 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 物料返回信息[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
