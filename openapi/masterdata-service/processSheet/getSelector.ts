// 工艺卡选择列表搜索VO
export interface I工艺卡选择列表搜索VO {
    // 物料id
    materialId: number;
    // 工序id
    processId: number;
}
// JSONResult«List«Id，名称，编号VO»»
export interface IJSONResultListId名称编号VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Id，名称，编号VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
