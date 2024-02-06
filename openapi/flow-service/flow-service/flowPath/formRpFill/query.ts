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
