import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:17400/doc.html#/default/流程数据相关/queryScanUsingPOST
*/
export default function fetchMethod(options: { data: IAssociationFormScanQueryRequestDTO }, extraOptions?: any) {
    return http<IJSONResultListAssociationFormScanQueryResponseDTO>(
        {
            url: "/app-mobile-web/api/app/mobile/flowPathData/queryScan",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** AssociationFormScanQueryRequestDTO */
export interface IAssociationFormScanQueryRequestDTO {
    /** 应用ID */
    appId?: string;
    /** 流程字段ID */
    flowPathFormFieldId?: string;
    /** 编码列表 */
    codeList?: string[];
    /** 表单数据 */
    formData?: Record<string, Record<string, any>>;
}
/** JSONResult«List«AssociationFormScanQueryResponseDTO»» */
export interface IJSONResultListAssociationFormScanQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IAssociationFormScanQueryResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** AssociationFormScanQueryResponseDTO */
export interface IAssociationFormScanQueryResponseDTO {
    /** 表单记录ID */
    id?: string;
    /** 表单记录编码 */
    code?: string;
    /** 显示字段值 */
    showFieldValue?: string;
}
