import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程相关/queryFormRpFillByConditionUsingPOST
*/
export default function fetchMethod(options: { data: IFlowPathFormFieldFormRpQueryConditionVoparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultListFlowPathFormFieldFormRpFillVo>(
        {
            url: "/flow-service/flowPath/formRpFill/query",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** FlowPathFormFieldFormRpQueryConditionVo */
export interface IFlowPathFormFieldFormRpQueryConditionVo {
    /** undefined */
    flowPathIdList?: number[];
    /** undefined */
    fillWayList?: ('NONE' | 'LAST' | 'CONCAT' | 'SUM')[];
}
/** JSONResult«List«FlowPathFormFieldFormRpFillVo»» */
export interface IJSONResultListFlowPathFormFieldFormRpFillVo {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFlowPathFormFieldFormRpFillVo[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** FlowPathFormFieldFormRpFillVo */
export interface IFlowPathFormFieldFormRpFillVo {
    /** undefined */
    id?: number;
    /** undefined */
    flowPathId?: number;
    /** undefined */
    flowPathVersionId?: number;
    /** undefined */
    flowPathVersionRank?: number;
    /** undefined */
    flowPathFormFieldId?: number;
    /** undefined */
    columnSerialNo?: string;
    /** undefined */
    secondarySourceFieldSerialNo?: string;
    /** undefined */
    secondarySourceFieldCode?: string;
    /** undefined */
    fillFormFieldSerialNo?: string;
    /** undefined */
    fillWay?: ('NONE' | 'LAST' | 'CONCAT' | 'SUM');
    /** undefined */
    isDisableEdited?: ('Y' | 'N');
}
