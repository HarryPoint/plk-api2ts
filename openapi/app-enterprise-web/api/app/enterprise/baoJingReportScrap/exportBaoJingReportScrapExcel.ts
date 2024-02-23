import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/报废统计/exportBaoJingReportScrapExcelUsingPOST
export default function fetchMethod(data: IBaojingReportScrapRelatedSearchVO) {
    return http<IJSONResultlong>({
        url: "/app-enterprise-web/api/app/enterprise/baoJingReportScrap/exportBaoJingReportScrapExcel",
        method: "post",
        data,
    });
}
// 宝晶报表(报废)相关搜索VO
export interface IBaojingReportScrapRelatedSearchVO {
    // 当前页面
    pageNo: number;
    // 报废类型集
    scrapTypes: string[];
    // 物料id集
    majorDataIds: number[];
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 外部编码
    materialOutsideCode: string;
    // 日期-开始 yyyy-MM-dd HH:mm:ss
    beginDate: string;
    // 物料名称
    majorDataName: string;
    // 日期-结束 yyyy-MM-dd HH:mm:ss
    endDate: string;
    // 物料规格
    majorDataSpec: string;
    // 仓库id集
    storehouseIds: number[];
    // 物料类型
    materialTypes: string[];
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
