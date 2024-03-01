import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/年度质量目标管理统计报表相关/queryAnnualQualityTargetManageStatisticsReportUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultListReturnTheAnnualQualityObjectiveManagementStatisticsToTheDTO>(
        {
            url: "/masterdata-service/qmsAnnualQualityTargetReport/queryAnnualQualityTargetManageStatisticsReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«年度质量目标管理统计返回DTO»» */
export interface IJSONResultListReturnTheAnnualQualityObjectiveManagementStatisticsToTheDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IAnnualQualityObjectiveManagementStatisticsAreReturnedToDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 年度质量目标管理统计返回DTO */
export interface IAnnualQualityObjectiveManagementStatisticsAreReturnedToDTO {
    /** 项明细 */
    items?: IAnnualQualityObjectiveManagementStatisticsAreReturnedToDTO[];
    /** 季度 */
    quarters?: string;
    /** 年 */
    year?: number;
}
/** 年度质量目标管理统计项返回DTO */
export interface IAnnualQualityObjectiveManagementStatisticsAreReturnedToDTO {
    /** 分类 */
    category?: string;
    /** 数据类型 */
    dataType?: string;
    /** 明细 */
    details?: ITheDetailedStatisticsOfAnnualQualityObjectiveManagementItemsAreReturnedToTheDTO[];
    /** 目标项id */
    qmsTargetItemId?: string;
    /** 目标项 */
    qmsTargetItemName?: string;
    /** 当期结果值 */
    resultValue?: string;
}
/** 年度质量目标管理统计项明细返回DTO */
export interface ITheDetailedStatisticsOfAnnualQualityObjectiveManagementItemsAreReturnedToTheDTO {
}
