import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/盼盼大屏相关/saveSettingInfoUsingPOST
*/
export default function fetchMethod(options: { data: IPanpanLargeScreenSetDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/lsPanPanSetting/saveSettingInfo",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 盼盼大屏设置DTO */
export interface IPanpanLargeScreenSetDTO {
    /** 延期订单判断值（小时） */
    overdueTime?: number;
    /** 大屏展示工序id集 */
    processIds?: number[];
    /** 延期订单判断类型 */
    produceOrderOverdueType?: ('PLAN_END_TIME' | 'THEORETIC_END_TIME');
    /** 开始时间月份类型 */
    monthBeginType?: ('LAST_MONTH' | 'CURRENT_MONTH');
    /** 开始时间月份日期 */
    monthBeginDay?: number;
    /** 结束时间月份日期 */
    monthEndDay?: number;
    /** 大屏中上 - 本月计划数量 */
    thisMonthPlanQuantity?: number;
    /** 大屏左上 - 当日生产概览 - 各工序当日完工情况表 产出数 取值逻辑类型 */
    panPanProduceOrderCompleteType?: ('ACTUAL_MOVE_OUT_QUANTITY' | 'PLAN_ORDER_MOVE_OUT_QUANTITY');
    /** 大屏中上 - 本月累计订单量 */
    thisMonthOrderCount?: number;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
