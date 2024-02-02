// 自定义筛选项编辑list对象DTO
export interface I自定义筛选项编辑list对象DTO {
    // undefined
    customFilterList: 自定义筛选项编辑对象DTO[];
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
