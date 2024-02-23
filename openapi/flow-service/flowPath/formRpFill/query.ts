import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/流程相关/queryFormRpFillByConditionUsingPOST
export default function fetchMethod(data: IFlowPathFormFieldFormRpQueryConditionVo, params: { enterpriseId: number }) {
    return http<IJSONResultListFlowPathFormFieldFormRpFillVo>({
        url: "/flow-service/flowPath/formRpFill/query",
        method: "post",
        data,
        params,
    });
}
// FlowPathFormFieldFormRpQueryConditionVo
export interface IFlowPathFormFieldFormRpQueryConditionVo {
    // undefined
    flowPathIdList: number[];
    // undefined
    fillWayList: string[];
}
// JSONResult«List«FlowPathFormFieldFormRpFillVo»»
export interface IJSONResultListFlowPathFormFieldFormRpFillVo {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IFlowPathFormFieldFormRpFillVo[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// FlowPathFormFieldFormRpFillVo
export interface IFlowPathFormFieldFormRpFillVo {
    // undefined
    id: number;
    // undefined
    flowPathId: number;
    // undefined
    flowPathVersionId: number;
    // undefined
    flowPathVersionRank: number;
    // undefined
    flowPathFormFieldId: number;
    // undefined
    columnSerialNo: string;
    // undefined
    secondarySourceFieldSerialNo: string;
    // undefined
    secondarySourceFieldCode: string;
    // undefined
    fillFormFieldSerialNo: string;
    // undefined
    fillWay: string;
    // undefined
    isDisableEdited: string;
}
