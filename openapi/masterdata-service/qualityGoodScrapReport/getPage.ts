// 良品报废数据表搜索VO
export interface I良品报废数据表搜索VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 时间筛选 - 开始 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 时间筛选 - 结束 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 物料id
    materialId: number;
    // 物料种类
    materialType: string;
}
// JSONResult«分页信息«良品报废数据表结果VO»»
export interface IJSONResult分页信息良品报废数据表结果VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«良品报废数据表结果VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
