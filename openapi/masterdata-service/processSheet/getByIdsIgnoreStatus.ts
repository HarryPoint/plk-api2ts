// id集合信息
export interface IIdCollectionInformation {
    // id集合
    ids: number[];
}
// JSONResult«List«工艺卡下拉选择列表搜索响应DTO»»
export interface IJSONResultList工艺卡下拉选择列表搜索响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I工艺卡下拉选择列表搜索响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工艺卡下拉选择列表搜索响应DTO
export interface I工艺卡下拉选择列表搜索响应DTO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}
