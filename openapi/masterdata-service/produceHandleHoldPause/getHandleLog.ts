import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产处理暂扣相关/getHandleLogUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultListProducesTheResponseObjectForTheSuspenseProcessingRecord>(
        {
            url: "/masterdata-service/produceHandleHoldPause/getHandleLog",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«生产处理暂扣处理记录响应对象»» */
export interface IJSONResultListProducesTheResponseObjectForTheSuspenseProcessingRecord {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionProcessingWithholdProcessingRecordResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 生产处理暂扣处理记录响应对象 */
export interface IProductionProcessingWithholdProcessingRecordResponseObject {
    /** 生产处理id */
    id?: number;
    /** 创建时间 */
    createTime?: string;
    /** 明细 */
    detailList?: IProductionProcessingWithholdProcessingRecordDetailsResponseObject[];
}
/** 生产处理暂扣处理记录详情响应对象 */
export interface IProductionProcessingWithholdProcessingRecordDetailsResponseObject {
    /** 生产处理id */
    id?: number;
    /** 创建时间 */
    createTime?: string;
    /** 生产处理操作类型 */
    handleOp?: ('REPORT_ADD' | 'REPORT_SURE' | 'REPORT_IGNORE' | 'HOLD_RELEASE' | 'HOLD_BACK' | 'HOLD_PAUSE_ADD' | 'HOLD_PAUSE_RELEASE' | 'HOLD_PAUSE_BACK' | 'HOLD_PAUSE_SCRAP' | 'BACK_ADD' | 'BACK_APPROVAL' | 'BACK_REFUSE' | 'SCRAP_ADD' | 'SCRAP_APPROVAL' | 'SCRAP_REFUSE' | 'QUALITY_COMPLETE' | 'QUALITY_CANCEL' | 'MOVE_IN' | 'MOVE_OUT' | 'ENTRUST_ADD');
    /** 返工生产后处理方式 */
    backProduceType?: ('RETURN' | 'ORDER');
    /** 返工工艺路径名称 */
    backProduceTechnologyRoutingStepName?: string;
    /** undefined */
    produceAbnormalName: string;
    /** 处理数量 */
    abnormalQuantity?: number;
    /** 处理意见 */
    handleRemark?: string;
}
