import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程表单字段相关/getFieldFillRuleUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProcessFormAssociationFormFillVO>(
        {
            url: "/flow-service/flowPathFormField/{id}/fillRule/get",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«流程表单关联表单填充VO»» */
export interface IJSONResultListProcessFormAssociationFormFillVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessFormAssociatedFormFillVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 流程表单关联表单填充VO */
export interface IProcessFormAssociatedFormFillVO {
    /** id */
    id?: string;
    /** 所属流程表单字段id */
    flowPathFormFieldId?: string;
    /** 被采取的字段序号值 */
    columnSerialNo?: string;
    /** 被采取的字段序号值的下级字段序号值 */
    secondarySourceFieldSerialNo?: string;
    /** 被采取的字段序号值的下级字段编码 */
    secondarySourceFieldCode?: string;
    /** 填充到的目标字段序号值 */
    fillFormFieldSerialNo?: string;
    /** 字段填充方式 */
    fillWay?: EProcessFormAssociatedFormFillVO_fillWay;
    /** 是否警用编辑 */
    isDisableEdited?: EProcessFormAssociatedFormFillVO_isDisableEdited;
    /** 是否允许修改填充内容- 默认是 Y */
    isAllowModificationOfFillContent?: EProcessFormAssociatedFormFillVO_isAllowModificationOfFillContent;
}

export enum EProcessFormAssociatedFormFillVO_fillWay {
    /** 直接填充 */
    NONE = "NONE",
    /** 最新 */
    LAST = "LAST",
    /** 合并 */
    CONCAT = "CONCAT",
    /** 合计 */
    SUM = "SUM"
}

export enum EProcessFormAssociatedFormFillVO_isDisableEdited {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormAssociatedFormFillVO_isAllowModificationOfFillContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
