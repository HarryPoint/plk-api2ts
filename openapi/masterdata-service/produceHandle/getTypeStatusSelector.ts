import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产事件管理/getTypeStatusSelectorUsingGET
*/
export default function fetchMethod(options: {}, extraOptions?: any) {
    return http<IJSONResultListProductionProcessTypeStatusLevel2LinkageVO>(
        {
            url: "/masterdata-service/produceHandle/getTypeStatusSelector",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«生产处理类型状态二级联动VO»» */
export interface IJSONResultListProductionProcessTypeStatusLevel2LinkageVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionProcessingTypeStatusSecondLevelLinkageVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 生产处理类型状态二级联动VO */
export interface IProductionProcessingTypeStatusSecondLevelLinkageVO {
    /** 异常分类 */
    type?: ('SCRAP' | 'HOLD' | 'HOLD_PAUSE' | 'REPORT' | 'BACK' | 'MOVE_IN' | 'MOVE_OUT' | 'QUALITY_APPLY' | 'TASK_ISSUE' | 'PRODUCE_ENTRUST' | 'TASK_ASSIGN');
    /** 异常分类描述 */
    typeDesc?: string;
    /** 关联状态集 */
    statusList?: IProductionProcessingStatusVO[];
}
/** 生产处理状态VO */
export interface IProductionProcessingStatusVO {
    /** 异常状态 */
    status?: ('CREATED' | 'SURE' | 'IGNORE' | 'RELEASE' | 'BACK' | 'HANDING' | 'ALL_HANDLE' | 'APPROVAL' | 'REFUSE' | 'REVOKE' | 'COMPLETE' | 'CANCEL');
    /** 异常状态描述 */
    statusDesc?: string;
}
