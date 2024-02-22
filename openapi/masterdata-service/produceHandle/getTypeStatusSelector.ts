import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产事件管理/getTypeStatusSelectorUsingGET
export function fetchMethod() {
    return get({
      url: "/masterdata-service/produceHandle/getTypeStatusSelector",
    });
}
// JSONResult«List«生产处理类型状态二级联动VO»»
export interface IJSONResultListProductionProcessTypeStatusLevel2LinkageVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProductionProcessingTypeStatusSecondLevelLinkageVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产处理类型状态二级联动VO
export interface IProductionProcessingTypeStatusSecondLevelLinkageVO {
    // 异常分类
    type: string;
    // 异常分类描述
    typeDesc: string;
    // 关联状态集
    statusList: IProductionProcessingStatusVO[];
}
// 生产处理状态VO
export interface IProductionProcessingStatusVO {
    // 异常状态
    status: string;
    // 异常状态描述
    statusDesc: string;
}
