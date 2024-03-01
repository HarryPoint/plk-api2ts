import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/深蓝大屏报表/getShenLanZheWanJiReportUsingGET
*/
export default function fetchMethod(options: { data: IQueryConditionsOfTheDarkBlueReport, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListDarkBluePressReport>(
        {
            url: "/masterdata-service/shenLan/report/zheWanJi",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** 深蓝报表查询条件 */
export interface IQueryConditionsOfTheDarkBlueReport {
    /** 当前刀具 */
    currentKnife?: string;
    /** 当前执行的程序名称 */
    currentProgramName?: string;
    /** 日期 */
    date?;
    /** 设备名称 */
    deviceName?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 运行模式 */
    runMode?: string;
    /** 报警信息 */
    warnInfo?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«List«深蓝折弯机报表»» */
export interface IJSONResultListDarkBluePressReport {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IDarkBlueBendingMachineReport[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 深蓝折弯机报表 */
export interface IDarkBlueBendingMachineReport {
    /** 日期 */
    date?;
    /** 设备名称 */
    deviceName?: string;
    /** 产能统计 */
    produceStatics?: string;
    /** 运行信号 */
    runSignal?: string;
    /** 报警信号 */
    warnInfo?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
