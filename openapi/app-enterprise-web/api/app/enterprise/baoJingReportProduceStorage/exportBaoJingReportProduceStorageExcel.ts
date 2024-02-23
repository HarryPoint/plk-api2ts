import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/库存统计（成品）日报表/exportBaoJingReportProduceStorageExcelUsingPOST
export default function fetchMethod(data: IBaojingReportInventoryRelatedSearchDTO) {
    return post<IJSONResultlong['data']>({
      url: "/app-enterprise-web/api/app/enterprise/baoJingReportProduceStorage/exportBaoJingReportProduceStorageExcel",
      data,
    });
}
// 宝晶报表(库存)相关搜索DTO
export interface IBaojingReportInventoryRelatedSearchDTO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 物料规格
    majorDataSpec: string;
    // 排序字段集
    orders: IPagingSort[];
    // 汇总聚合维度字段集
    groupBys: string[];
    // 外部编码
    materialOutsideCode: string;
    // 导出字段集
    exportFields: string[];
    // 日期-结束 yyyy-MM-dd HH:mm:ss
    endDate: string;
    // 物料id集
    majorDataIds: number[];
    // 物料名称
    majorDataName: string;
    // 业务员ids
    businessUserIds: number[];
    // 区域id
    areaIds: number[];
    // 日期-开始 yyyy-MM-dd HH:mm:ss
    beginDate: string;
    // 物料类型
    materialTypes: string[];
    // 单据名称
    billNames: string[];
    // 保管员
    materialCurators: string[];
}
// 分页排序
export interface IPagingSort {
    // 需要进行排序的字段
    column: string;
    // 是否正序排列，默认Y
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
