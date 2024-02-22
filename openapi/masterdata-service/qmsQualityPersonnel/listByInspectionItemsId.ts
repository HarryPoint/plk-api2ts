// http://47.108.139.107:16700/doc.html#/default/质量人员服务相关/listByInspectionItemsIdUsingGET
// JSONResult«List«质量人员下拉响应DTO»»
export interface IJSONResultListQualityPersonnelDropDownResponseDtos {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IQualityPersonnelDropDownResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 质量人员下拉响应DTO
export interface IQualityPersonnelDropDownResponseDTO {
    // id
    id: number;
    // 员工编号
    employeeCode: string;
    // 员工姓名
    employeeName: string;
    // 可检验项目
    qmsInspectionItemName: string;
}
