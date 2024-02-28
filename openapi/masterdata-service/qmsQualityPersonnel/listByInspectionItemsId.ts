import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/质量人员服务相关/listByInspectionItemsIdUsingGET
*/
export default function fetchMethod(options: { params: { inspectionItemsId?: string } }, extraOptions?: any) {
    return http<IJSONResultListQualityPersonnelDropDownResponseDtos>(
        {
            url: "/masterdata-service/qmsQualityPersonnel/listByInspectionItemsId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«质量人员下拉响应DTO»» */
export interface IJSONResultListQualityPersonnelDropDownResponseDtos {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IQualityPersonnelDropDownResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 质量人员下拉响应DTO */
export interface IQualityPersonnelDropDownResponseDTO {
    /** id */
    id?: string;
    /** 员工编号 */
    employeeCode?: string;
    /** 员工姓名 */
    employeeName?: string;
    /** 可检验项目 */
    qmsInspectionItemName?: string;
}
