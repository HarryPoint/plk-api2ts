// JSONResult«导出信息«售后质量分析返回VO»»
export interface IJSONResult导出信息售后质量分析返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I导出信息售后质量分析返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«售后质量分析返回VO»
export interface I导出信息售后质量分析返回VO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: I售后质量分析返回VO[];
}
// 售后质量分析返回VO
export interface I售后质量分析返回VO {
    // 客户
    customer: string;
    // 业务员
    businessMan: string;
    // 产品名称
    productName: string;
    // 产品id集合
    productIds: string;
    // 灌装日期
    fillingDate: string;
    // 灌装日期
    fillingDateStr: string;
    // 生产日期
    productionDate: string;
    // 灌装线
    fillingLine: string;
    // 责任单位
    responsibleUnit: string;
    // 事故描述
    accidentDesc: string;
    // 数量
    quantity: number;
    // 图片
    picUrls: I附件VO[];
    // 备注
    remark: string;
}
// 附件 VO
export interface I附件VO {
    // 文件id
    id: number;
    // 文件key
    fileKey: string;
    // 文件完整路径
    fileUrl: string;
    // 文件名
    fileName: string;
    // 文件大小
    size: number;
}
