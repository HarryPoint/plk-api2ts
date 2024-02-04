// 质量月报部门设置编辑DTO
export interface I质量月报部门设置编辑DTO {
    // 部门id集合
    departmentIds: number[];
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
