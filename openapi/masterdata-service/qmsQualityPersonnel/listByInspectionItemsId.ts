// JSONResult«List«质量人员下拉响应DTO»»
export interface IJSONResultList质量人员下拉响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I质量人员下拉响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 质量人员下拉响应DTO
export interface I质量人员下拉响应DTO {
    // id
    id: number;
    // 员工编号
    employeeCode: string;
    // 员工姓名
    employeeName: string;
    // 可检验项目
    qmsInspectionItemName: string;
}
