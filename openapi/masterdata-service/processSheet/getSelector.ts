// 工艺卡选择列表搜索VO
export interface IProcessCardSelectionListSearchVO {
    // 物料id
    materialId: number;
    // 工序id
    processId: number;
}
// JSONResult«List«Id，名称，编号VO»»
export interface IJSONResultListIdNameNumberVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Id，名称，编号VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
