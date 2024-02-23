import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/质检统计/exportReportExcelUsingPOST_2
export default function fetchMethod(data: IScrapDataSheetSearchVO) {
    return http<IJSONResultlong>({
        url: "/masterdata-service/qualityGoodScrapReport/exportReportExcel",
        method: "post",
        data,
    });
}
// 良品报废数据表搜索VO
export interface IScrapDataSheetSearchVO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 时间筛选 - 开始 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 时间筛选 - 结束 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 物料id
    materialId: number;
    // 物料种类
    materialType: string;
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
