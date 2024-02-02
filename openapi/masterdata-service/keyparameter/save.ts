// 关键参数保存DTO
export interface I关键参数保存DTO {
    // id
    id: number;
    // 编号
    code: string;
    // 名称
    name: string;
    // 关联物料
    materialIds: number[];
    // 关联工序
    processIds: number[];
    // 关键参数集合
    parameterDetailList: 关键参数明细保存DTO[];
}
// JSONResult«关键参数信息响应对象»
export interface IJSONResult关键参数信息响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 关键参数信息响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
