// 质量月报部门设置查询DTO
export interface I质量月报部门设置查询DTO {
    // 年份开始时间
    yearBegin: string;
    // 年份结束时间
    yearEnd: string;
}
// JSONResult«质量月报部门设置响应DTO»
export interface IJSONResult质量月报部门设置响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I质量月报部门设置响应DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 质量月报部门设置响应DTO
export interface I质量月报部门设置响应DTO {
    // 年份开始时间
    yearBegin: string;
    // 年份结束时间
    yearEnd: string;
    // 部门id集合
    departmentIds: number[];
    // 部门集合
    departments: IIdCodeName通用传输对象[];
}
// Id Code Name 通用传输对象
export interface IIdCodeName通用传输对象 {
    // id
    id: number;
    // code
    code: string;
    // name
    name: string;
}
