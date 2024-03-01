import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/质检分类/editUsingPOST_16
*/
export default function fetchMethod(options: { data: IEditTheQualityInspectionClassificationDTO, params: { EnterpriseId?: string; UserId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/qualityInspectionCategory/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 编辑质检分类 DTO */
export interface IEditTheQualityInspectionClassificationDTO {
    /** 质检分类编码 */
    code?: string;
    /** id，如果不传就是新增 */
    id?: string;
    /** 是否应用编码规则 */
    isCodeRule: EEditTheQualityInspectionClassificationDTO_isCodeRule;
    /** 质检分类名 */
    name: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EEditTheQualityInspectionClassificationDTO_isCodeRule {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
